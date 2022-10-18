import {
  Container,
  createStyles,
  Divider,
  Group,
  Header as MantineHeader,
  HeaderProps as MantineHeaderProps,
  Paper,
  Title,
  Transition,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { IconMenu2 } from "@tabler/icons";
import { useDisclosure } from "@mantine/hooks";
import { defaults, Page, PageData, pages } from "../theme/navbar";
import Link from "./Link";
import ColorSchemeIcon from "./ColorSchemeIcon";

export type HeaderProps = Omit<MantineHeaderProps, "children" | "height"> & {
  page?: Page;
  iconsStrokeWidth?: number;
  height?: number;
};

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius[theme.defaultRadius],
    padding: theme.spacing.sm,
  },
  headerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.sm,
    borderRadius: theme.radius[theme.defaultRadius],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },
  },
  dropdown: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
  },
  link: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

type LogoProps = {
  page: PageData;
};

function Logo({ page }: LogoProps) {
  const { classes } = useStyles();

  return (
    <Link href={page.path}>
      <UnstyledButton className={classes.logo}>
        <Group>
          <page.icon strokeWidth={page.strokeWidth} />
        </Group>
      </UnstyledButton>
    </Link>
  );
}

type HeaderLinkProps = {
  page: PageData;
  active?: boolean;
  onClick?(): void;
};

function HeaderLink({ page, active, onClick }: HeaderLinkProps) {
  const { classes, cx } = useStyles();

  return (
    <Link href={page.path}>
      <UnstyledButton
        className={cx(classes.link, { [classes.linkActive]: active })}
        onClick={onClick}
      >
        <Group spacing="xs">
          <page.icon strokeWidth={page.strokeWidth} />
          <Title order={6}>{page.label}</Title>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export default function Header({
  page = defaults.page,
  height = defaults.horizontal.height,
  ...props
}: HeaderProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  const { home: homePage, ...otherPages } = pages;

  const links = Object.keys(otherPages).map((key) => (
    <HeaderLink
      key={key}
      page={otherPages[key]}
      active={key === page}
      onClick={close}
    />
  ));

  const linksWithDividers = links.flatMap((link, index) => [
    link,
    index !== links.length - 1 && (
      <Divider key={`${link.key}-divider`} size="xs" />
    ),
  ]);

  return (
    <MantineHeader height={height} {...props}>
      <Container className={classes.container}>
        <Logo page={homePage} />
        <Group>
          <UnstyledButton
            onClick={() => toggleColorScheme()}
            className={classes.headerButton}
          >
            <ColorSchemeIcon strokeWidth={defaults.strokeWidth} />
          </UnstyledButton>
          <UnstyledButton onClick={toggle} className={classes.headerButton}>
            <IconMenu2 strokeWidth={defaults.strokeWidth} />
          </UnstyledButton>
        </Group>
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              className={classes.dropdown}
              style={{ top: height, ...styles }}
              withBorder
            >
              {linksWithDividers}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
}
