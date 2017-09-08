# Homework Policy

- Homework will take more time for some, and less time for others. It is up to you how you want to partition your time for a given exercise. You will generally be assigned homework every day.

- Turn in **something**. Turning in an incomplete assignment is **infinitely** better than turning in nothing at all. **We rely on homework to know where you're at.** It's very much to your advantage to turn in your homework the day it's assigned, even if -- *especially* if -- you're not able to finish it. Then we can address concerns before the unit continues and keep you from falling behind.

- Each assignment will ask you to learn or research something that has explicitly not been covered in class. Learning how to learn is fundamental to becoming a successful developer.

- Homework is graded only on **meaningful progress**. That is: that you made an effort to complete it, regardless of whether you were successful.

- Plagiarized homework will not be accepted.

> Concerned about what is considered plagiarism? Consult an instructor.

- Assignments are graded on whether or not you seem to have made a meaningful effort to do them. There are three possible grades for each assignment:
  - **Complete:** something was turned in, and meaningful effort was made.
  - **Incomplete:** something was turned in, but meaningful effort was not made: the submission is blank, or it was blatantly copied wholesale from somewhere.
  - **Missing:** nothing was turned in.

- **Feedback** will not be given on assignments by an instructor unless you specifically request it. Requests for feedback, however, are encouraged. To make a request, you will need to submit a github issue on the main homework repository. On the main repo, click the 'issues' tab at the top, then the green button that says "New Issue". Please be very specific in your requests.

  For example:

  > Any thoughts as to why the method on line 49 kept returning 'NaN'?

- You can track your homework completion rate in [Garnet](http://garnet.wdidc.org).

# Homework Submission Process

1. Open the homework repository in your browser. This link will be sent via slack at the end of each day and can also be found in Garnet as the nights assignment.

2. Click the "Fork" button to fork the homework repository in github.

3. Now you should see **your forked copy** of the homework repo in the browser. Click the "Clone or download" button and copy the SSH link.

4. In Terminal, `cd` into your `homework` directory and run `git clone <LINK>`, where `<LINK>` is the SSH link that you've just copied.

5. `cd` into the cloned homework repository.

6. Create a new branch to complete the homework. `git checkout -b new_branch_name`

7. Open your code in atom and complete the homework.

8. Track and stage your files with `git add .` then `git commit -m "Message goes here"`. Finally push to your forked copy on Github with `git push origin new_branch_name`.

8. Go back to **your forked copy** on Github. Click the "New pull request" button to create a new pull request from your **new_branch_name** into the main repository from GA.

10. Create the pull request to submit your homework. Make sure to include your name. I.e. "Britney Jo submitting my JS adventure homework"

For example, the sequence of commands you might follow to complete the above process is:

```
# Click grey 'Fork' button on Github
js1989: ~/wdi $ git clone git@github.com:js1989/homeworkaroo.git
js1989: ~/wdi/homeworkaroo $ cd homeworkaroo
js1989: ~/wdi/homeworkaroo $ git checkout -b homework_branch
js1989: ~/wdi/homeworkaroo (johnsmith_solution *) $ git add .
js1989: ~/wdi/homeworkaroo (johnsmith_solution +) $ git commit -m "Homeworkaroo complete"
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $ git push origin homework_branch
# Click green 'New pull request' button on Github
# Click green 'Create pull request' button
# Click the new 'Create pull request' button
```

### If you have errors...

...please refer to [this readme](http://ga-wdi-lessons.github.io/git-review/) for instructions on common Git errors.
