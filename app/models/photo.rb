class Photo < ApplicationRecord
  #Mounts paperclip image
  has_attached_file :image
  
  #This validates the type of file uploaded. According to this, only images are allowed.
  #validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  #do_not_validate_attachment_file_type :image
  
  
  #Validates file, file type and file size
  validates_attachment :image, presence: true,
  content_type: { content_type: /\Aimage\/.*\z/ },
  size: { in: 0..50.kilobytes }
  
  belongs_to :category
end
