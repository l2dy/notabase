import type { Descendant } from 'slate';
import { BillingFrequency, PlanId } from 'constants/pricing';
import { NoteTreeItem } from 'lib/store';

export enum SubscriptionStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export type User = {
  id: string;
  subscription_id: Subscription['id'] | null;
  note_tree: NoteTreeItem[];
};

export type Note = {
  id: string;
  user_id: User['id'];
  content: Descendant[];
  title: string;
  created_at: string;
  updated_at: string;
};

export type Subscription = {
  id: string;
  user_id: User['id'];
  stripe_customer_id: string;
  stripe_subscription_id: string | null;
  plan_id: PlanId;
  subscription_status: SubscriptionStatus;
  frequency: BillingFrequency;
  current_period_end: string;
  cancel_at_period_end: boolean;
};
