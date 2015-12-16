json.extract!(
fan,
:email, :username, :short_bio, :long_bio, :location_zip, :account_type
)

if show_videos
  json.videos do
    json.array!(fan.videos) do |video|
      json.partial! 'videos/video', video: video
    end
  end
end

if show_press_items
  json.press_items do
    json.array!(fan.press_items) do |press_item|
      json.partial! 'press_items/press_item', press_item: press_item
    end
  end
end

if show_images
  json.images do
    json.array!(fan.images) do |image|
      json.partial! 'images/image', image: image
    end
  end
end

if fan.account_type == "band" && show_info
  json.extract!(
  fan.band,
  :discography, :genre, :members
  )
end

if fan.account_type == "venue" && show_info
  json.extract!(
  fan.venue,
  :geo_lat, :geo_lng, :address
  )
end
