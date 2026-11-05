# Student resume book — no coding needed

The Contact page builds its student list automatically from the PDFs in this folder.

## Add a student

1. Get the student's permission to publish their resume. These files are public on the website and in this repository.
2. Save their resume as a PDF, then rename it on your computer using this exact pattern: **Student Name--Major.pdf** (two hyphens between the name and major).
   - Example: `Veer Singh--Computer Science.pdf`
   - Another example: `Jane Doe--Mechanical Engineering.pdf`
   - Use ordinary spaces in names and majors. Do not use `/` or `--` inside either field.
3. On GitHub, open **public → resumes**. Click **Add file → Upload files**.
4. Drag in the renamed PDF. You can upload several students at once.
5. Click **Commit changes** to save. If GitHub asks you to create a pull request instead, create it and ask a maintainer to merge it.
6. Wait for the website deployment to finish, then open **Contact → Browse Resumes**. The name and major come from the filename, and students appear alphabetically. Click the student's name to check the PDF.

No JSON, code changes, or separate roster edits are needed.

## Replace a resume

Upload the new PDF to this folder using **exactly the same filename**, then commit. This replaces the student's PDF without making a duplicate entry.

## Change a name or major

Rename the PDF on your computer, upload it, and delete the old file from this folder using GitHub's file menu. Commit both changes. The filename is what visitors see.

## Remove a student

Open their PDF in this folder and choose **Delete file** from the file menu, then commit. This removes their entry from the next website deployment. Earlier copies remain in Git history.

## If the update does not appear

Check the deployment status on the latest commit. Every PDF filename must have both a name and a major separated by exactly two hyphens. A malformed filename stops the new build and reports which file needs renaming. Also check that the PDF is directly inside this folder, not in a subfolder.
