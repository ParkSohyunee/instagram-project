export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'username', // 데이터베이스에서 접근하는 이름 (key)
      type: 'string',
      title: 'Username', // 스튜디오 UI상에서 보이는 이름
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image',
    },
    {
      name: 'following',
      type: 'array',
      title: 'Following',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule: any) => Rule.unique(),
    },
    {
      name: 'followers',
      type: 'array',
      title: 'Followers',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule: any) => Rule.unique(),
    },
    {
      name: 'bookmarks',
      type: 'array',
      title: 'Bookmarks',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule: any) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
}
