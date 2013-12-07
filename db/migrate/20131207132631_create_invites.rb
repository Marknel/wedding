class CreateInvites < ActiveRecord::Migration
  def change
    create_table :invites do |t|
      t.string :name
      t.string :url
      t.text :dietry_requirements
      t.boolean :invited_to_ceremony
      t.boolean :invited_to_reception
      t.integer :attending_ceremony
      t.integer :attending_reception
      t.datetime :first_viewed_at
      t.datetime :most_recently_viewed_at

      t.timestamps
    end
  end
end
