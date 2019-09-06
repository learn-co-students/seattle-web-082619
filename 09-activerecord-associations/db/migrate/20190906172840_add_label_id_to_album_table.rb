class AddLabelIdToAlbumTable < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :record_label_id, :integer
  end
end
