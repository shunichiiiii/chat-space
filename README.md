## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups_usets
- has_many :groups through: :groups_users
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :messages
- has_many :groups_users
- has_many  :users,  through:  :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text|null: true|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: :false,foreign_key: :true|
### Association
- belongs_to :users
- belongs_to :groups

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups
