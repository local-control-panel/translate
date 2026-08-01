import enCommon from './en/common.json';
import enNav from './en/nav.json';
import enSettings from './en/settings.json';
import enServers from './en/servers.json';
import enSites from './en/sites.json';
import enWordpress from './en/wordpress.json';
import enPhp from './en/php.json';
import enDocker from './en/docker.json';
import enDatabases from './en/databases.json';
import enBackups from './en/backups.json';
import enCloudflare from './en/cloudflare.json';
import enMonitoring from './en/monitoring.json';
import enSecurity from './en/security.json';
import enNotifications from './en/notifications.json';
import enFiles from './en/files.json';
import enCron from './en/cron.json';
import enHealth from './en/health.json';
import enLogs from './en/logs.json';

export const resources = {
  en: {
    common: enCommon,
    nav: enNav,
    settings: enSettings,
    servers: enServers,
    sites: enSites,
    wordpress: enWordpress,
    php: enPhp,
    docker: enDocker,
    databases: enDatabases,
    backups: enBackups,
    cloudflare: enCloudflare,
    monitoring: enMonitoring,
    security: enSecurity,
    notifications: enNotifications,
    files: enFiles,
    cron: enCron,
    health: enHealth,
    logs: enLogs,
  },
  // Add new languages here as they're merged, e.g.:
  // fr: { common: frCommon, nav: frNav, ... },
} as const;

export const namespaces = Object.keys(resources.en) as Array<keyof typeof resources.en>;
