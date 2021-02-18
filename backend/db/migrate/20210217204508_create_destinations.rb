class CreateDestinations < ActiveRecord::Migration[6.0]
  def change
    create_table :destinations do |t|
      t.string :city
      t.string :country
      t.integer :importance
      t.integer :user_id

      t.timestamps
    end
  end
end
