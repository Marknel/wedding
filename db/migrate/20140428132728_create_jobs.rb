class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :name
      t.datetime :due_at
      t.string :person_responsible
      t.string :location
      t.string :maps_url
      t.text :notes

      t.timestamps
    end
  end
end
