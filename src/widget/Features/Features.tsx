import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
  } from '@mantine/core';
  import { IconCookie,  IconBrandAndroid, IconAdOff } from '@tabler/icons-react';
  
  const mockdata = [
    {
      title: 'Кроссплатформ*',
      description:
        'поддержка таких платформ как Windows, Android, Android TV, Linux, Web',
      icon: IconBrandAndroid,
    },
    {
      title: 'Без рекламы*',
      description:
        'Просмотр аниме полностью без рекламы',
      icon: IconAdOff,
    },
    {
      title: 'Доп. Функции',
      description:
        'Собственный плеер с ведением статистики просмотра, сохранением прогресса, достижениями, подсказками и многими другими функциями.\nКомментарии, обсуждения, обзоры, коллекции и многие другие функции взаимодействия.',
      icon: IconCookie,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: 'pink' || theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: 'pink' || theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function Features() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={'pink' || theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group position="center">
          <Badge variant="filled" color='pink' size="lg">
            The Unboard
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Новая платформа для аниме сообщества
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
        На The Unboard мы объединяем всех, кто разделяет нашу любовь к японской анимации.
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }