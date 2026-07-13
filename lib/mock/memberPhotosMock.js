
const AVATAR_COLORS = ["#DCEEFF", "#FDE1EA", "#DCEEFF", "#DFF5E6", "#FCE1DC", "#FCEFD1", "#E7DFFC", "#DFF3F0", "#FCE1DC", "#E4E4E4", "#FCE1DC", "#DFF3F0", "#DCEEFF", "#F3DFF7", "#E4E4E4"];

export const MEMBER_PHOTOS_MOCK = [
  { id: "p1", full_name: "Aaron Daniel", membership_number: "STJ/M/2012/0045", ministry_group: "Men's Fellowship", has_photo: true },
  { id: "p2", full_name: "Anita Varghese", membership_number: "STJ/F/2015/0067", ministry_group: "Women's Fellowship", has_photo: true },
  { id: "p3", full_name: "Balaji Thomas", membership_number: "STJ/M/2010/0021", ministry_group: "Choir", has_photo: true },
  { id: "p4", full_name: "Delphine Samuel", membership_number: "STJ/F/2018/0109", ministry_group: "Sunday School", has_photo: true },
  { id: "p5", full_name: "Edward Mathew", membership_number: "STJ/M/2008/0012", ministry_group: "Ushering", has_photo: true },
  { id: "p6", full_name: "Grace Philip", membership_number: "STJ/F/2011/0033", ministry_group: "Youth Ministry", has_photo: true },
  { id: "p7", full_name: "Jacob Joseph", membership_number: "STJ/M/2016/0078", ministry_group: "Men's Fellowship", has_photo: true },
  { id: "p8", full_name: "Leela Daniel", membership_number: "STJ/F/2005/0008", ministry_group: "Women's Fellowship", has_photo: true },
  { id: "p9", full_name: "M. K. Daniel", membership_number: "STJ/M/2002/0003", ministry_group: "Choir", has_photo: true },
  { id: "p10", full_name: "Mary George", membership_number: "STJ/F/2013/0056", ministry_group: "Sunday School", has_photo: true },
  { id: "p11", full_name: "Mathew John", membership_number: "STJ/M/2003/0011", ministry_group: "Ushering", has_photo: true },
  { id: "p12", full_name: "Neena Abraham", membership_number: "STJ/F/2017/0091", ministry_group: "Women's Fellowship", has_photo: true },
  { id: "p13", full_name: "Philip Varghese", membership_number: "STJ/M/2014/0062", ministry_group: "Youth Ministry", has_photo: true },
  { id: "p14", full_name: "Rekha Thomas", membership_number: "STJ/F/2019/0113", ministry_group: "Choir", has_photo: true },
  { id: "p15", full_name: "Samuel Raj", membership_number: "STJ/M/2020/0122", ministry_group: "Men's Fellowship", has_photo: false },
].map((m, i) => ({ ...m, avatarColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }));

export const WITHOUT_PHOTO_MOCK = MEMBER_PHOTOS_MOCK.filter((m) => !m.has_photo);
