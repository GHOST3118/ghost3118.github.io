import { Button, rem } from "@mantine/core";
import { IconBrandTelegram } from '@tabler/icons-react'

export default function TelegramButton() {
    return(
        <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://theunboard.t.me/"
        leftIcon={<IconBrandTelegram size={rem(18)} />}
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: rem(42),
            paddingLeft: rem(20),
            paddingRight: rem(20),
            '&:not([data-disabled])': theme.fn.hover({
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            }),
          },

          leftIcon: {
            marginRight: theme.spacing.md,
          },
        })}
      >
        Следить за проектом
      </Button>
    )
}