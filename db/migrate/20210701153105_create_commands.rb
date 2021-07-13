class CreateCommands < ActiveRecord::Migration[6.1]
  def change
    create_table :commands do |t|
      t.string :name
      t.string :language
      t.string :usage
      t.integer :user_id

      t.timestamps
    end
  end
end
