package com.awesomeproject;

import android.annotation.SuppressLint;
import android.provider.Settings;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceIdModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    DeviceIdModule(ReactApplicationContext context){
        super(context);
        reactContext = context;

        Log.d("NativeModule", "Module initialized");

    }

    @NonNull
    @Override
    public String getName() {
        return "DeviceIdModule";
    }

    @ReactMethod
    public void getPhoneID(Promise response) {
        try {
            @SuppressLint("Device ID") String id = Settings.Secure.getString(reactContext.getContentResolver(), Settings.Secure.ANDROID_ID);
            response.resolve(id);
        } catch (Exception e) {
            response.reject("Error", e);
        }
    }


}
