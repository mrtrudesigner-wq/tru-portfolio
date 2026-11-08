#!/usr/bin/env bash
cd "$(dirname "$0")"
PORT=3000

echo "🚀 Đang khởi động portfolio của Trứ (Product Designer)..."
echo "📍 Mở trình duyệt tại: http://localhost:$PORT"

# Open browser if on macOS
if command -v open > /dev/null; then
  sleep 1 && open "http://localhost:$PORT" &
fi

python3 -m http.server $PORT
