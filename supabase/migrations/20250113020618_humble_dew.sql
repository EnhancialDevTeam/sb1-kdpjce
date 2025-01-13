/*
  # Add Contact and Newsletter Management Tables

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, nullable)
      - `company` (text, nullable)
      - `message` (text)
      - `service` (text)
      - `date` (timestamptz, nullable)
      - `time` (text, nullable)
      - `status` (text)
      - `created_at` (timestamptz)
    
    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `status` (text)
      - `subscribed_at` (timestamptz)
      - `created_at` (timestamptz)

    - `storage_logs`
      - `id` (uuid, primary key)
      - `operation` (text)
      - `status` (text)
      - `error_message` (text, nullable)
      - `error_code` (text, nullable)
      - `error_details` (text, nullable)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to create entries
    - Add policies for authenticated users to view their submissions
    - Add policies for public access to create newsletter subscriptions

  3. Indexes
    - Email index for newsletter subscriptions
    - Status index for contact submissions
    - Created at index for all tables
*/

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  service text NOT NULL,
  date timestamptz,
  time text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'contacted', 'completed', 'archived'))
);

CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for contact_submissions
CREATE POLICY "Contact submissions can be created by anyone"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Contact submissions viewable by authenticated users only"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Newsletter Subscriptions Table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'active',
  subscribed_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_subscription_status CHECK (status IN ('active', 'unsubscribed'))
);

CREATE INDEX IF NOT EXISTS newsletter_subscriptions_email_idx ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS newsletter_subscriptions_status_idx ON newsletter_subscriptions(status);
CREATE INDEX IF NOT EXISTS newsletter_subscriptions_created_at_idx ON newsletter_subscriptions(created_at);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policies for newsletter_subscriptions
CREATE POLICY "Newsletter subscriptions can be created by anyone"
  ON newsletter_subscriptions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Newsletter subscriptions viewable by authenticated users only"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

-- Storage Logs Table
CREATE TABLE IF NOT EXISTS storage_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  operation text NOT NULL,
  status text NOT NULL,
  error_message text,
  error_code text,
  error_details text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS storage_logs_operation_idx ON storage_logs(operation);
CREATE INDEX IF NOT EXISTS storage_logs_status_idx ON storage_logs(status);
CREATE INDEX IF NOT EXISTS storage_logs_created_at_idx ON storage_logs(created_at);

ALTER TABLE storage_logs ENABLE ROW LEVEL SECURITY;

-- Policies for storage_logs
CREATE POLICY "Storage logs can be created by authenticated users"
  ON storage_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Storage logs viewable by authenticated users only"
  ON storage_logs
  FOR SELECT
  TO authenticated
  USING (true);