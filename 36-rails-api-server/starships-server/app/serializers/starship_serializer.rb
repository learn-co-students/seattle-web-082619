class StarshipSerializer < ActiveModel::Serializer
  attributes :id, :name, :registration, :crew_members
  attributes :foo
end
