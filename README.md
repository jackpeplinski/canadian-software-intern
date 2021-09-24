> Checkout the deployed version [here](https://canadian-software-intern.netlify.app/)!

# 💼 What this is?
Applying to tech internships early is often important to actually be considered for roles—that's why I made this site; hopefully it helps people know when to look for internships postings!

I'll do my best to keep it updated, and also to send out emails when new roles open. I will never sell or distribute your email address and you can unsubscribe anytime.

# 💽 Where did I get the info from?
I sourced most of the info from [this GitHub list](https://github.com/ChrisDryden/Canadian-Tech-Internships-Summer-2022) (with some modifications).

# 👨🏽‍💻 What tech did I use and why?
### React
Using React was probably a bit overkill for this site considering there aren't many components to reuse. That being said, React does have lots of other useful features like state management that I used a bit. Of course, I also just like working in React since I've used it in lots of other projects since it's _so_ popular now a days. Also, if I do decide to expand the project, I'll have a start on some of the components.

### `styled-components`
I mainly just wanted to continue trying out some JS-in-CSS! My thoughts are:
- Having the 'CSS' in the same JS file is nice but I find there's a lot more syntax involved that be confusing at first as-opposed to more CSS based options. For example having to write `${(props) => props.theme.borderRadius};` seems like a lot just to have a passed in variable.
- Maybe this is just a me issue, but the [formatter for VSCode](https://github.com/microsoft/typescript-styled-plugin/issues/146) I tried wasn't working for me and this meant there was no autocomplete. This meant I had to be really careful when typing in names.
- From another project I used `styled-components` on with Gatsby, there can be some confusing syntax when using Gatsby's built in `Img` component.
- Having a different name for each styled component can make your HTML tree a bit confusing since there's no common tag structure.

### Gatsby
Similar to React, I didn't use all the features Gatsby (e.g., responsive images) offers due to the small size (at the momement) of the project. I still like the file structure Gatsby generates and also the opportunties it provides if I do expand the project in the future.
