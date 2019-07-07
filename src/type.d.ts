interface Name {
  eng: string;
  kor: string;
  nickname: string;
}

interface SNS {
  facebook: string;
  instagram: string;
  github: string;
  linkedin: string;
  rocketpunch: string;
  twitter: string;
}

interface Education {
  name: string;
  url: string;
  location: string;
  major: string[];
  start_date: string;
  end_date: string;
  image: string;
}

interface Experience {
  name: string;
  url: string;
  location: string;
  start_date: string;
  end_date: string;
  role: string;
  image: string;
}

interface Community {
  name: string;
  url: string;
  location: string;
  start_date: string;
  end_date: string;
  role: string;
  image: string;
}

interface Award {
  name: string;
  organization: string;
  year: string;
}

interface Honor {
  name: string;
  organization: string;
  year: string;
}

interface Scholarship {
  name: string;
  organization: string;
  date: string;
}

interface MediaReport {
  title: string;
  url: string;
  date: string;
  organization: string;
}

interface Resume {
  name: Name;
  bio: string;
  sns: SNS;
  email: string;
  educations: Education[];
  experiences: Experience[];
  communities: Community[];
  awards: Award[];
  Honors: Honor[];
  scholarships: Scholarship[];
  mediaReports: MediaReport[];
}
