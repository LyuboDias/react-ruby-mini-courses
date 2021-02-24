class ChangeColumnIn < ActiveRecord::Migration[6.0]
  def change
    change_column :sections, :course_id, :bigint, :null => true
  end
end
