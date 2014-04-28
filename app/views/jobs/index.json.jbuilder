json.array!(@jobs) do |job|
  json.extract! job, :id, :name, :due_at, :person_responsible, :location, :maps_url, :notes
  json.url job_url(job, format: :json)
end
