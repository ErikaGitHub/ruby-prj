class AddLatAndLngToPharmacies < ActiveRecord::Migration
  def change
  	add_column :pharmacies, :lat, :decimal, :precision=>15, :scale=>10
  	add_column :pharmacies, :lng, :decimal, :precision=>15, :scale=>10
  end
end
