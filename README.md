# Sound.wav Sessions — Full Site v3
Built on 2025-09-09.

This package includes:
- Mobile-first site (index, calendar, newsletter, performers, artists, archive, performance, admin)
- Poster archive grid → per-event pages with bios, gallery, recap video
- Lightbox for image zoom
- Config-driven embeds (calendar + newsletter + unsubscribe)
- Admin builder for events/artists/media (image/youtube/link) + "Clone form" button hook

## Setup
1) Upload the whole folder to GitHub or Google Drive hosting (Netlify/DriveToWeb/etc.).
2) Edit `/data/config.json` with your real Google Calendar and Forms.
3) Use `/admin.html` to build events and download `events.json`, then upload to `/data/events.json`.
4) Posters go in `assets/archive/…` and gallery photos in `assets/photos/<event-slug>/…`.

## GitHub Actions Unzip tip
If you use the auto-unzip workflow, set it to trigger on `*.zip` and sync all files.
