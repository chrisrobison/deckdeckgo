// https://cloud.google.com/functions/docs/concepts/exec#file_system

import fetch, {Response} from 'node-fetch';

import * as rimraf from 'rimraf';

import {html_beautify} from 'js-beautify';

import {promises as fs} from 'fs';
import * as os from 'os';
import * as path from 'path';

import {DeckMeta} from '../../../model/deck';

export function deleteDir(localPath: string): Promise<void> {
  return new Promise<void>((resolve) => {
    rimraf(localPath, () => {
      resolve();
    });
  });
}

export async function parseDeck(login: string, project: string, url: string, meta: DeckMeta) {
  await parseIndexHtml(login, project, meta);
  await parseManifestJson(login, project, meta);
  await parseReadme(login, project, url, meta);
}

async function parseIndexHtml(login: string, project: string, meta: DeckMeta) {
  const indexPath: string = getLocalFilePath(login, project, 'src', 'index.html');

  const indexHtml: string = await getRemoteContent(meta, 'index.html');

  await fs.writeFile(indexPath, html_beautify(indexHtml), 'utf8');
}

async function parseManifestJson(login: string, project: string, meta: DeckMeta) {
  const manifestJsonPath: string = getLocalFilePath(login, project, 'src', 'manifest.json');

  const manifestJson: string = await getRemoteContent(meta, 'manifest.json');

  await fs.writeFile(manifestJsonPath, html_beautify(manifestJson), 'utf8');
}

async function parseReadme(login: string, project: string, url: string, meta: DeckMeta) {
  const readmePath: string = getLocalFilePath(login, project, 'README.md');

  const data = await fs.readFile(readmePath, 'utf8');

  let result = data.replace(/\{\{DECKDECKGO_TITLE\}\}/g, meta.title);
  result = result.replace(/\{\{DECKDECKGO_DESCRIPTION\}\}/g, meta.description ? (meta.description as string) : '');
  result = result.replace(/\{\{DECKDECKGO_BASE_HREF\}\}/g, meta.pathname);
  result = result.replace(/\{\{DECKDECKGO_GITHUB_REPO_URL\}\}/g, url);
  result = result.replace(/\{\{DECKDECKGO_GITHUB_REPO_NAME\}\}/g, project);

  await fs.writeFile(readmePath, result, 'utf8');
}

async function getRemoteContent(meta: DeckMeta, rootFilename: string): Promise<string> {
  try {
    const response: Response = await fetch(`https://beta.deckdeckgo.io${meta.pathname}${rootFilename}`);

    if (!response || !response.ok) {
      console.error(response);
      throw new Error('Cannot fetch deck index HTML.');
    }

    const html: string = await response.text();

    return html;
  } catch (err) {
    console.error(err);
    throw new Error('Unexpected error while trying to fetch deck index HTML.');
  }
}

export function getLocalPath(login: string, project: string): string {
  return path.join(os.tmpdir(), login, project);
}

export function getLocalFilePath(login: string, project: string, ...files: string[]): string {
  return path.join(getLocalPath(login, project), ...files);
}
