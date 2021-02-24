class ChangeColumnNull < ActiveRecord::Migration[6.0]
  def change
    def change
      change_column_null :episodes, :section_id, true
    end
  end
end
