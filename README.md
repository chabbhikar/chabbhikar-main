# How to setup Chabbhikar on local

1. clone this repo on local ```git clone https://github.com/chabbhikar/chabbhikar-main.git```
2. run ```corepack enable``` on terminal this will make yarn version latest and enable some other standard dev procedures
3. run ```yarn install``` this will setup the yarn version specified in package.json and install/link dependencies.
4. run ```yarn run dev``` or ```yarn turbo run dev```
   1. this will run all the web packages
5. to run specific web package in which we are working ```yarn workspace web dev```



## yarn versions
| Version | Release Date   | Latest Patch | Stability Status        | Notes                                                                                   |
|---------|----------------|--------------|-------------------------|-----------------------------------------------------------------------------------------|
| 4       | October 2023   | 4.5.3        | Active Support          | Latest major release with active security and feature updates.                          |
| 3       | July 2021      | 3.8.7        | Active Support          | Stable release with ongoing support; users are encouraged to upgrade to version 4.      |
| 2       | July 2020      | 2.4.3        | Ended Support (Sep 2021)| No longer supported; users should upgrade to a supported version.                       |
| 1       | September 2017 | 1.22.22      | Maintenance Mode        | Receives only critical and security fixes; upgrading to a newer version is recommended. |




### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
