import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_slides';
  info: {
    displayName: 'slide';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    url: Schema.Attribute.String;
    price: Schema.Attribute.String;
    discount: Schema.Attribute.String;
    brand: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
    icon: 'apps';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files'>;
    call: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slide': SharedSlide;
      'shared.cta': SharedCta;
    }
  }
}
