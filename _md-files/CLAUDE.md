# CLAUDE.md - Project Context

## Project Structure
- **Type**: Next.js website with TypeScript
- **Location**: `/fn7/backend/node-gke/fastly-nextjs`
- **Framework**: Next.js 13.4.6
- **Language**: TypeScript (.tsx, .ts files)

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run fastly instance in local
npm run fastly-serve

# Deploy to Fastly
npm run fastly-deploy -- --token [TOKEN]

# Purge cache (both services)
fastly purge --all --token [TOKEN] --service-id iHzlVmEXjoUnfbwQpHdFO5
fastly purge --all --token [TOKEN] --service-id kAMlxjhEvWm3K6DbXv6jv1
```

## Key Service IDs
- **Edge Compute Service**: iHzlVmEXjoUnfbwQpHdFO5
- DEV compute service: 5g5hLrw2tkg5GH1rfPBr7i
- **CDN Service**: kAMlxjhEvWm3K6DbXv6jv1
- **Fastly Token**: hvdENd8J2pjPSQMy4EhzmMsuSAFQ-vvB

## URLs
- **Production**: https://gently-supreme-leopard.edgecompute.app
- **Local Dev**: http://localhost:3000 (or 3001 if 3000 is in use)
- **Management**: https://manage.fastly.com/configure/services/iHzlVmEXjoUnfbwQpHdFO5

## Deployment Process
1. Make changes locally
2. Test with `npm run dev`
3. Commit changes
4. Deploy with `npm run fastly-deploy -- --token [TOKEN]`
5. **IMPORTANT**: Always purge both edge compute and CDN caches after deployment

## Git Branches
- `fastly-nextjs-website` - Main website branch

## Notes
- Always check for uncommitted README changes when switching branches
- Use `git checkout -f [branch]` if regular checkout fails

