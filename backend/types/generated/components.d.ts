import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonsDirectionCouncilMember extends Schema.Component {
  collectionName: 'components_commons_direction_council_members';
  info: {
    displayName: 'directionCouncilMember';
    icon: 'user';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    photo: Attribute.Media;
    degree: Attribute.String;
    position: Attribute.String;
  };
}

export interface CommonsExtensionProject extends Schema.Component {
  collectionName: 'components_commons_extension_projects';
  info: {
    displayName: 'ExtensionProject';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    topic: Attribute.Text;
    owner: Attribute.Component<'commons.postgrade-course-owner'>;
    description: Attribute.RichText;
  };
}

export interface CommonsGuideTeachersMember extends Schema.Component {
  collectionName: 'components_commons_guide_teachers_members';
  info: {
    displayName: 'GuideTeachersMember';
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.String;
    iamge: Attribute.Media;
    group: Attribute.String;
  };
}

export interface CommonsPostgradeCourseOwner extends Schema.Component {
  collectionName: 'components_commons_postgrade_course_owners';
  info: {
    displayName: 'PostgradeCourseOwner';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    email: Attribute.Email;
    degree: Attribute.String;
  };
}

export interface CommonsPostgradeCourse extends Schema.Component {
  collectionName: 'components_commons_postgrade_courses';
  info: {
    displayName: 'PostgradeCourse';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    topic: Attribute.String;
    image: Attribute.Media;
    owner: Attribute.Component<'commons.postgrade-course-owner'>;
  };
}

export interface CommonsResearchEvent extends Schema.Component {
  collectionName: 'components_commons_research_events';
  info: {
    displayName: 'ResearchEvent';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    venue: Attribute.String;
    image: Attribute.Media;
    owner: Attribute.Component<'commons.postgrade-course-owner'>;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    topic: Attribute.String;
  };
}

export interface CommonsResearchLineItem extends Schema.Component {
  collectionName: 'components_commons_research_line_items';
  info: {
    displayName: 'ResearchLineItem';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    responsible: Attribute.String;
    responsibleEmail: Attribute.Email;
    responsibleImage: Attribute.Media;
  };
}

export interface CommonsTeachingFacultyMember extends Schema.Component {
  collectionName: 'components_commons_teaching_faculty_members';
  info: {
    displayName: 'TeachingFacultyMember';
    description: '';
  };
  attributes: {
    mane: Attribute.String;
    email: Attribute.Email;
    description: Attribute.Text;
    image: Attribute.Media;
    position: Attribute.String;
    area: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'commons.direction-council-member': CommonsDirectionCouncilMember;
      'commons.extension-project': CommonsExtensionProject;
      'commons.guide-teachers-member': CommonsGuideTeachersMember;
      'commons.postgrade-course-owner': CommonsPostgradeCourseOwner;
      'commons.postgrade-course': CommonsPostgradeCourse;
      'commons.research-event': CommonsResearchEvent;
      'commons.research-line-item': CommonsResearchLineItem;
      'commons.teaching-faculty-member': CommonsTeachingFacultyMember;
    }
  }
}
