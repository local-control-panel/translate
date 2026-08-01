# Website Control Panel — Translations

Community translations for [Website Control Panel](https://github.com/local-control-panel/website-control-panel).

## How it works

Each language has its own directory (e.g. `en/`, `fr/`, `de/`) containing one
JSON file per feature area (namespace). `en/` is the source of truth,
maintained by the core team. To add a new language, copy the JSON files from
`en/` and translate the values.

## Step-by-step

1. **Fork** this repository on GitHub.
2. **Create** a new directory: `<bcp47-code>/` where `<bcp47-code>` is the
   language code (e.g. `fr`, `de`, `es`, `bg`).
3. **Copy** one or more JSON files from `en/` into your new directory.
4. **Translate** the values — never change the keys on the left side.
5. **Open a Pull Request** with title: `i18n: add <Language> translation for <namespace(s)>`

## Rules

- Translate **values only**. Keys must stay exactly the same.
- Partial translations are welcome — you don't need to translate every file.
  Any missing key automatically falls back to English.
- Keep `{{placeholder}}` variables unchanged — they are replaced at runtime.
- Do not change JSON structure (no nested objects, no extra fields).

## Namespaces

| File | Content |
|---|---|
| `common.json` | Shared buttons, errors, status messages |
| `nav.json` | Sidebar navigation labels |
| `settings.json` | Settings page |
| `servers.json` | Server add/edit modals |
| `sites.json` | Sites tab and modals |
| `wordpress.json` | WordPress management tab |
| `php.json` | PHP tab |
| `docker.json` | Docker containers, Compose, images, networks, volumes |
| `databases.json` | MariaDB, PostgreSQL, Valkey |
| `backups.json` | Backup jobs and restore |
| `cloudflare.json` | Cloudflare DNS and WAF |
| `monitoring.json` | Monitoring and metrics |
| `security.json` | Brute-force guard, malware scanner, permissions |
| `notifications.json` | Notification channels and events |
| `files.json` | File editor |
| `cron.json` | Cron manager |
| `health.json` | Health checks |
| `logs.json` | Log viewer |

## Adding a new namespace

If the core app adds a new feature area, the core team adds the matching
`en/<namespace>.json` here and lists it in `index.ts` — translators then
add the equivalent file under their language directory whenever they're
ready.

## Consuming this repo

The main app pulls this repo in as a git submodule at `translate/` and
imports `resources`/`namespaces` from `index.ts` into its i18next setup.
Keys here must always match the keys the app actually calls via
`t('namespace:key')` — the core team is responsible for keeping `en/` in
sync with the app; translators only need to fill in values for the keys
that already exist.

## Questions?

Open a GitHub Issue with the `i18n` label.
