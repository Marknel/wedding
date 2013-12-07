json.array!(@invites) do |invite|
  json.extract! invite, :id, :name, :url, :dietry_requirements, :invited_to_ceremony, :invited_to_reception, :attending_ceremony, :attending_reception, :first_viewed_at, :most_recently_viewed_at
  json.url invite_url(invite, format: :json)
end
