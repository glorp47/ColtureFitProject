json.extract!(
band,
:discography, :genre, :members
)

json.images band.images do |image|
  json.extract!
end

json.name ["value"]
