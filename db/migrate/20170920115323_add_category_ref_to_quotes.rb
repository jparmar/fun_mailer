class AddCategoryRefToQuotes < ActiveRecord::Migration[5.0]
  def change
    add_reference :quotes, :category, foreign_key: true
  end
end
