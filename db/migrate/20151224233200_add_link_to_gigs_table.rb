class AddLinkToGigsTable < ActiveRecord::Migration
  def change
    add_column :gigs, :link_src, :string
  end
end
