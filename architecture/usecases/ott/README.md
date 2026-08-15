# OTT 
- Over The Top backend architecture.
- large scale video ingestion
- secure storage
- fast metadata
- player
- seamless streaming.

---
# Ingestion, Transcoding, and Formatting.
- Master video file.
- Upload using chunked upload protocols.
- Transcoding and packaging.
- videos are converted to 
    - HLS (http live streaming) apple
    - DASH (Dynamic adaptive Streaming over HTTP)
- ffmpeg
- encoded to multiple resoltions to and bitrate e.g., 
    - 4k
    - 1080p
    - 720p
    - 480p
- manifest file .m3u8 alongside hundreds of small media segments.
---
# Video Metadata and CMS
- Managing descriptive information about videos
    - titles
    - descriptions, cast
    - generes
    - ratings
    - thumbnails
- Relational DB, NoSQL
- Search discovery

---
# Storage Architecture for Faster Retrieval
- to ensure low latency and zero buffering during playback, storage is tiered seperating files from cached delivery path.
- hot storage s3
- cold storage glacier
- CDN caches video segments and manifests at edges around the world.


---
# Streaming Content Delivery and Security
- Delivering the stream securely and smoothly to web and mobile relies on streaming mechanisms.
- Adaptive bitrate streaming.
- Player dynamically switches stream quality up or down based on the user real time network bandwidth and device cpu, preventing stuttering or buffering interruptions.




















