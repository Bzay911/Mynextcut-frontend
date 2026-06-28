import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function ProtectedLayout() {
    return (
        <NativeTabs minimizeBehavior="automatic"> 
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="my-haircuts">
        <NativeTabs.Trigger.Icon sf="apple.image.playground" md="image" />
        <NativeTabs.Trigger.Label>My Haircuts</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Icon sf="person" md="person" />
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="camera" role="search">
        <NativeTabs.Trigger.Icon sf="camera" md="camera"/>
        <NativeTabs.Trigger.Label>Camera</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
    );
}