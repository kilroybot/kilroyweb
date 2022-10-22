import {
  Center,
  createStyles,
  Navbar as MantineNavbar,
  NavbarProps as MantineNavbarProps,
  Space,
  Stack,
  Tooltip,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { defaults, Page, PageData, pages } from "../theme/navbar";
import Link from "./Link";
import { UnstyledButtonProps } from "@mantine/core/lib/UnstyledButton/UnstyledButton";
import ColorSchemeIcon, { ColorSchemeIconProps } from "./ColorSchemeIcon";

const useStyles = createStyles((theme) => ({
  entry: {
    width: 50,
    height: 50,
    borderRadius: theme.radius[theme.defaultRadius],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

  active: {
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

type NavbarEntryProps = UnstyledButtonProps & {
  label: string;
  onClick?(): void;
};

function NavbarEntry({ label, className, ...props }: NavbarEntryProps) {
  const { classes, cx } = useStyles();

  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton className={cx(classes.entry, className)} {...props} />
    </Tooltip>
  );
}

type NavbarLinkProps = {
  page: PageData;
  active?: boolean;
};

function NavbarLink({ page, active }: NavbarLinkProps) {
  const { classes } = useStyles();

  return (
    <Link href={page.path}>
      <NavbarEntry label={page.label} className={active && classes.active}>
        <page.icon stroke={page.strokeWidth} />
      </NavbarEntry>
    </Link>
  );
}

type ColorSchemeToggleProps = ColorSchemeIconProps;

function ColorSchemeToggle({
  strokeWidth = defaults.strokeWidth,
  ...props
}: ColorSchemeToggleProps) {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <NavbarEntry
      label="Toggle color scheme"
      onClick={() => toggleColorScheme()}
    >
      <ColorSchemeIcon strokeWidth={strokeWidth} {...props} />
    </NavbarEntry>
  );
}

export type NavbarProps = Omit<MantineNavbarProps, "children"> & {
  page?: Page;
};

export default function Navbar({
  width = defaults.vertical.width,
  py = defaults.vertical.py,
  px = defaults.vertical.px,
  page = defaults.page,
  ...props
}: NavbarProps) {
  const { home: homePage, ...otherPages } = pages;

  const theme = useMantineTheme();

  const links = Object.keys(otherPages).map((key) => (
    <NavbarLink key={key} page={pages[key]} active={key === page} />
  ));

  return (
    <MantineNavbar width={width} style={{ top: 0 }} py={py} px={px} {...props}>
      <MantineNavbar.Section>
        <Center style={{ height: "100%" }}>
          <Stack spacing={0}>
            <NavbarLink page={homePage} active={page === "home"} />
          </Stack>
        </Center>
      </MantineNavbar.Section>
      <Space h={theme.spacing.xs / 4} />
      <MantineNavbar.Section grow>
        <Center style={{ height: "100%" }}>
          <Stack spacing={theme.spacing.xs / 4}>{links}</Stack>
        </Center>
      </MantineNavbar.Section>
      <Space h={theme.spacing.xs / 4} />
      <MantineNavbar.Section>
        <Center style={{ height: "100%" }}>
          <Stack spacing={0}>
            <ColorSchemeToggle />
          </Stack>
        </Center>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}
