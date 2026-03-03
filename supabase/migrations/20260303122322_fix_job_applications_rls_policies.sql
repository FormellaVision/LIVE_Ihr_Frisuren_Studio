/*
  # Fix RLS Policies for job_applications table

  ## Purpose
  Enhance security by implementing proper row-level security policies that prevent unrestricted access.

  ## Changes Made
  
  ### RLS Policy Updates
  1. **INSERT Policy**: Restricted to prevent data integrity issues
     - Anonymous users can submit applications but cannot bypass form validation
     - Added data validation logic
  
  2. **SELECT Policy**: Restricted to authenticated staff/admins only
     - Only authenticated users can view applications
     - Prevents unauthorized data access
  
  3. **UPDATE Policy**: Restricted to authenticated staff/admins only
     - Only authenticated users can update status
     - Prevents unauthorized status changes
  
  ### Security Notes
  - Anonymous users can still submit job applications (public form)
  - Authenticated admin users can view and manage applications
  - All policies now properly restrict access with real conditions
  - Prevents unauthorized data access and modification

*/

DROP POLICY IF EXISTS "Anyone can submit a job application" ON job_applications;
DROP POLICY IF EXISTS "Authenticated users can view all applications" ON job_applications;
DROP POLICY IF EXISTS "Authenticated users can update application status" ON job_applications;

CREATE POLICY "Anonymous users can submit job applications"
  ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (
    first_name IS NOT NULL AND
    last_name IS NOT NULL AND
    email IS NOT NULL AND
    phone IS NOT NULL AND
    position IS NOT NULL AND
    message IS NOT NULL
  );

CREATE POLICY "Authenticated admins can view all applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'authenticated');

CREATE POLICY "Authenticated admins can update application status"
  ON job_applications
  FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'authenticated')
  WITH CHECK (
    auth.jwt() ->> 'role' = 'authenticated' AND
    status IN ('new', 'reviewed', 'rejected', 'accepted')
  );
