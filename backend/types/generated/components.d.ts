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
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'commons.direction-council-member': CommonsDirectionCouncilMember;
    }
  }
}
