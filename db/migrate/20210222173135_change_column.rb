class ChangeColumn < ActiveRecord::Migration[6.0]
  def change
    change_column :episodes, :section_id, :bigint, :null => true
  end
end
