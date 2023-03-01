# ffmpeg

## MKV to mp4 conversion
```
ffmpeg -i Waltair_Veerayya.mkv -f mp4 -c:a mp3 Waltair_Veerayya.mp4
```

## Convert video to mp4 format with mp3 audio codecs
```
ffmpeg -i filename.extension -c copy -c:a mp3 filename.mp4
```

## Streaming file to RTMP

```
ffmpeg -re -i nginx.mp4  -f flv rtmp:192.168.0.103/live/bbb
```

## Converting RTMP to audio chunks
```
ffmpeg -i rtmp:192.168.0.103/live/bbb -f segment -segment_time 3 -ac 1 rtmp-raw/out%03d.wav
```

## Merging two video files
```
ffmpeg -i myfile1.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts temp1.ts
ffmpeg -i myfile2.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts temp2.ts
// now join
ffmpeg -i "concat:temp1.ts|temp2.ts" -c copy -bsf:a aac_adtstoasc output.mp4
```
