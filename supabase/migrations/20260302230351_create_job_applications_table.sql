/*
  # Create job_applications table

  ## Purpose
  Stores career/job applications submitted via the /karriere page.

  ## New Tables
  - `job_applications`
    - `id` (uuid, primary key)
    - `first_name` (text, required) - Applicant first name
    - `last_name` (text, required) - Applicant last name
    - `phone` (text, required) - Phone number
    - `email` (text, required) - Email address
    - `position` (text, required) - Desired position/role
    - `message` (text, required) - Cover message
    - `experience` (text, optional) - Years/description of experience
    - `earliest_start` (text, optional) - Earliest start date
    - `work_model` (text, optional) - Vollzeit / Teilzeit / Mini-Job
    - `resume_filename` (text, optional) - Name of uploaded resume file
    - `created_at` (timestamptz, auto) - Submission timestamp
    - `status` (text, default 'new') - Application status for internal tracking

  ## Security
  - RLS enabled
  - INSERT allowed for anonymous users (public form submission)
  - SELECT/UPDATE/DELETE restricted to authenticated users (admin only)
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  position text NOT NULL,
  message text NOT NULL,
  experience text DEFAULT '',
  earliest_start text DEFAULT '',
  work_model text DEFAULT '',
  resume_filename text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a job application"
  ON job_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update application status"
  ON job_applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
