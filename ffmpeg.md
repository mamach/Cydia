# ffmpeg

## Convert video to mp4 format with mp3 audio codecs
```
ffmpeg -i filename.extension -c copy -c:a mp3 filename.mp4
```

### Streaming file to RTMP

```
ffmpeg -re -i nginx.mp4  -f flv rtmp:192.168.0.103/live/bbb
```

### Converting RTMP to audio chunks
```
ffmpeg -i rtmp:192.168.0.103/live/bbb -f segment -segment_time 3 -ac 1 rtmp-raw/out%03d.wav
```
