export interface CorporateReference {
  id: string;
  name: string;
  imageUrl: string;
  websiteUrl: string;
  sourceUrl?: string;
  order: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

