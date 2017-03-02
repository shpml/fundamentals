# Contributing to Fundamentals

## Getting Started

Fundamentals is a [GitBook](https://github.com/GitbookIO/gitbook).

GitBook can be installed from NPM using:

```
$ npm install
```

Run a local copy at http://localhost:4000 with:

```
$ npm start
```

Chapters are written in markdown files and compiled down to HTML inside `_book`

To build the static website use:

```
$ gitbook build
```

> Warning! Inline code blocks ie single back ticks are not properly escaping HTML entities.
> To work around this use `<code>`

```
<code>"This works"</code>
`"This doesn't"`
```

### Requesting Changes

To request changes to the content, create an issue using a clear with the unit and lesson or activity (ie `Unit 6.5 Quiz Numbering is off`).

Please take a look at existing [issues](https://github.com/generalassembly/fundamentals/issues) before creating new issues.

### Quiz Format

Quizzes are hosted in Typeform and are linked from this project. To request changes to quizzes, create an issue following the guidelines above.

### Deployment

Builds and deploys are handled automatically via Travis CI. To deploy a new version:

1. Create a branch with the version name.
2. Create a new release against the updated branch as the Target.
3. Mark the new release as a pre-release and publish.
4. The new release will trigger a build in Travis, which generates a directory in the gh-pages branch. This takes ~20 minutes.
5. The new release will be available at `fundamentals.generalassemb.ly/newRelease`

### Additional Resources

- [Gitbook](https://github.com/GitbookIO/gitbook)
- [AirBnB Style Guide](https://github.com/airbnb/javascript)
