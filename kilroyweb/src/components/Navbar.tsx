import {
  Center,
  createStyles,
  Navbar as MantineNavbar,
  NavbarProps as MantineNavbarProps,
  Stack,
  Tooltip,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSun, TablerIcon } from "@tabler/icons";
import {
  defaultPadding,
  defaultPage,
  defaultStrokeWidth,
  defaultWidth,
  Page,
  pages,
} from "../theme/navbar";
import Link from "./Link";
import { UnstyledButtonProps } from "@mantine/core/lib/UnstyledButton/UnstyledButton";

const useStyles = createStyles((theme) => ({
  entry: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
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
  icon: TablerIcon;
  label: string;
  active?: boolean;
  href?: string;
  strokeWidth?: number;
};

function NavbarLink({
  icon: Icon,
  label,
  active,
  href,
  strokeWidth,
}: NavbarLinkProps) {
  const { classes } = useStyles();

  return (
    <Link href={href}>
      <NavbarEntry label={label} className={active && classes.active}>
        <Icon stroke={strokeWidth} />
      </NavbarEntry>
    </Link>
  );
}

type ColorSchemeToggleProps = {};

function ColorSchemeToggle({}: ColorSchemeToggleProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <NavbarEntry
      label="Toggle color scheme"
      onClick={() => toggleColorScheme()}
    >
      {colorScheme === "dark" ? <IconSun /> : <IconMoonStars />}
    </NavbarEntry>
  );
}

export type NavbarProps = Omit<MantineNavbarProps, "children"> & {
  page?: Page;
  iconsStrokeWidth?: number;
};

export default function Navbar({
  width = defaultWidth,
  p = defaultPadding,
  page = defaultPage,
  iconsStrokeWidth = defaultStrokeWidth,
  ...props
}: NavbarProps) {
  const links = Object.keys(pages).map((key) => (
    <NavbarLink
      key={key}
      label={pages[key].label}
      icon={pages[key].icon}
      href={pages[key].path}
      active={key === page}
      strokeWidth={iconsStrokeWidth}
    />
  ));

  return (
    <MantineNavbar width={width} p={p} {...props}>
      <MantineNavbar.Section grow>
        <Center style={{ height: "100%" }}>
          <Stack spacing={0}>{links}</Stack>
        </Center>
      </MantineNavbar.Section>
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
