class CreateQuotes < ActiveRecord::Migration[5.0]
  def change
    create_table :quotes do |t|
      t.string :name

      t.timestamps
    end
    Quote.create :name => "Birthday"
    Quote.create :name => "Anniversary"
  end
end
