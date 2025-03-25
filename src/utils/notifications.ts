import notifee, {
  AndroidImportance,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import {Task} from '../data/types';

/**
 * Инициализация канала уведомлений (Android)
 * Рекомендуется вызывать один раз при старте приложения
 */
export async function initNotifications() {
  await notifee.requestPermission();

  await notifee.createChannel({
    id: 'default',
    name: 'Уведомления задач',
    importance: AndroidImportance.HIGH,
  });
}

/**
 * Планирует уведомление по времени задачи
 * @param task Задача
 * @returns ID уведомления или undefined
 */
export async function scheduleNotification(
  task: Task,
): Promise<string | undefined> {
  if (!task.time) return;

  const triggerTime = new Date(`${task.date}T${task.time}`);

  // Убедимся, что время в будущем
  if (triggerTime.getTime() <= Date.now()) return;

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: triggerTime.getTime(),
  };

  const id = await notifee.createTriggerNotification(
    {
      title: 'Напоминание',
      body: `${task.title} (${task.category})`,
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher', // проверь, что у тебя есть этот ресурс
      },
    },
    trigger,
  );

  return id;
}

/**
 * Отмена уведомления по его ID
 * @param id ID уведомления
 */
export async function cancelNotification(id?: string) {
  if (id) {
    await notifee.cancelNotification(id);
  }
}
