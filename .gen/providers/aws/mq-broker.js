"use strict";
// https://www.terraform.io/docs/providers/aws/r/mq_broker.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MqBroker = exports.MqBrokerInstances = void 0;
var cdktf = require("cdktf");
var MqBrokerInstances = /** @class */ (function (_super) {
    __extends(MqBrokerInstances, _super);
    function MqBrokerInstances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MqBrokerInstances.prototype, "consoleUrl", {
        // console_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('console_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBrokerInstances.prototype, "endpoints", {
        // endpoints - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('endpoints');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBrokerInstances.prototype, "ipAddress", {
        // ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        enumerable: false,
        configurable: true
    });
    return MqBrokerInstances;
}(cdktf.ComplexComputedList));
exports.MqBrokerInstances = MqBrokerInstances;
function mqBrokerConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        revision: cdktf.numberToTerraform(struct.revision)
    };
}
function mqBrokerEncryptionOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        use_aws_owned_key: cdktf.booleanToTerraform(struct.useAwsOwnedKey)
    };
}
function mqBrokerLdapServerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct.hosts),
        role_base: cdktf.stringToTerraform(struct.roleBase),
        role_name: cdktf.stringToTerraform(struct.roleName),
        role_search_matching: cdktf.stringToTerraform(struct.roleSearchMatching),
        role_search_subtree: cdktf.booleanToTerraform(struct.roleSearchSubtree),
        service_account_password: cdktf.stringToTerraform(struct.serviceAccountPassword),
        service_account_username: cdktf.stringToTerraform(struct.serviceAccountUsername),
        user_base: cdktf.stringToTerraform(struct.userBase),
        user_role_name: cdktf.stringToTerraform(struct.userRoleName),
        user_search_matching: cdktf.stringToTerraform(struct.userSearchMatching),
        user_search_subtree: cdktf.booleanToTerraform(struct.userSearchSubtree)
    };
}
function mqBrokerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        audit: cdktf.stringToTerraform(struct.audit),
        general: cdktf.booleanToTerraform(struct.general)
    };
}
function mqBrokerMaintenanceWindowStartTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        day_of_week: cdktf.stringToTerraform(struct.dayOfWeek),
        time_of_day: cdktf.stringToTerraform(struct.timeOfDay),
        time_zone: cdktf.stringToTerraform(struct.timeZone)
    };
}
function mqBrokerUserToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        console_access: cdktf.booleanToTerraform(struct.consoleAccess),
        groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.groups),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker}
*/
var MqBroker = /** @class */ (function (_super) {
    __extends(MqBroker, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MqBrokerConfig
    */
    function MqBroker(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_mq_broker',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applyImmediately = config.applyImmediately;
        _this._authenticationStrategy = config.authenticationStrategy;
        _this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        _this._brokerName = config.brokerName;
        _this._deploymentMode = config.deploymentMode;
        _this._engineType = config.engineType;
        _this._engineVersion = config.engineVersion;
        _this._hostInstanceType = config.hostInstanceType;
        _this._publiclyAccessible = config.publiclyAccessible;
        _this._securityGroups = config.securityGroups;
        _this._storageType = config.storageType;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._configuration = config.configuration;
        _this._encryptionOptions = config.encryptionOptions;
        _this._ldapServerMetadata = config.ldapServerMetadata;
        _this._logs = config.logs;
        _this._maintenanceWindowStartTime = config.maintenanceWindowStartTime;
        _this._user = config.user;
        return _this;
    }
    Object.defineProperty(MqBroker.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "authenticationStrategy", {
        get: function () {
            return this.getStringAttribute('authentication_strategy');
        },
        set: function (value) {
            this._authenticationStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetAuthenticationStrategy = function () {
        this._authenticationStrategy = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "authenticationStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authenticationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "autoMinorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('auto_minor_version_upgrade');
        },
        set: function (value) {
            this._autoMinorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetAutoMinorVersionUpgrade = function () {
        this._autoMinorVersionUpgrade = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "autoMinorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoMinorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "brokerName", {
        get: function () {
            return this.getStringAttribute('broker_name');
        },
        set: function (value) {
            this._brokerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "brokerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._brokerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "deploymentMode", {
        get: function () {
            return this.getStringAttribute('deployment_mode');
        },
        set: function (value) {
            this._deploymentMode = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetDeploymentMode = function () {
        this._deploymentMode = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "deploymentModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "engineType", {
        get: function () {
            return this.getStringAttribute('engine_type');
        },
        set: function (value) {
            this._engineType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "engineTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "hostInstanceType", {
        get: function () {
            return this.getStringAttribute('host_instance_type');
        },
        set: function (value) {
            this._hostInstanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "hostInstanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostInstanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // instances - computed: true, optional: false, required: false
    MqBroker.prototype.instances = function (index) {
        return new MqBrokerInstances(this, 'instances', index);
    };
    Object.defineProperty(MqBroker.prototype, "publiclyAccessible", {
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        set: function (value) {
            this._publiclyAccessible = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetPubliclyAccessible = function () {
        this._publiclyAccessible = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "publiclyAccessibleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publiclyAccessible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "storageType", {
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        set: function (value) {
            this._storageType = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetStorageType = function () {
        this._storageType = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "storageTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetSubnetIds = function () {
        this._subnetIds = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "configuration", {
        get: function () {
            return this.interpolationForAttribute('configuration');
        },
        set: function (value) {
            this._configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetConfiguration = function () {
        this._configuration = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "encryptionOptions", {
        get: function () {
            return this.interpolationForAttribute('encryption_options');
        },
        set: function (value) {
            this._encryptionOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetEncryptionOptions = function () {
        this._encryptionOptions = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "encryptionOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "ldapServerMetadata", {
        get: function () {
            return this.interpolationForAttribute('ldap_server_metadata');
        },
        set: function (value) {
            this._ldapServerMetadata = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetLdapServerMetadata = function () {
        this._ldapServerMetadata = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "ldapServerMetadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ldapServerMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "logs", {
        get: function () {
            return this.interpolationForAttribute('logs');
        },
        set: function (value) {
            this._logs = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetLogs = function () {
        this._logs = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "logsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "maintenanceWindowStartTime", {
        get: function () {
            return this.interpolationForAttribute('maintenance_window_start_time');
        },
        set: function (value) {
            this._maintenanceWindowStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    MqBroker.prototype.resetMaintenanceWindowStartTime = function () {
        this._maintenanceWindowStartTime = undefined;
    };
    Object.defineProperty(MqBroker.prototype, "maintenanceWindowStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maintenanceWindowStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "user", {
        get: function () {
            return this.interpolationForAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqBroker.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MqBroker.prototype.synthesizeAttributes = function () {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            authentication_strategy: cdktf.stringToTerraform(this._authenticationStrategy),
            auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
            broker_name: cdktf.stringToTerraform(this._brokerName),
            deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
            engine_type: cdktf.stringToTerraform(this._engineType),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            host_instance_type: cdktf.stringToTerraform(this._hostInstanceType),
            publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            storage_type: cdktf.stringToTerraform(this._storageType),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            configuration: cdktf.listMapper(mqBrokerConfigurationToTerraform)(this._configuration),
            encryption_options: cdktf.listMapper(mqBrokerEncryptionOptionsToTerraform)(this._encryptionOptions),
            ldap_server_metadata: cdktf.listMapper(mqBrokerLdapServerMetadataToTerraform)(this._ldapServerMetadata),
            logs: cdktf.listMapper(mqBrokerLogsToTerraform)(this._logs),
            maintenance_window_start_time: cdktf.listMapper(mqBrokerMaintenanceWindowStartTimeToTerraform)(this._maintenanceWindowStartTime),
            user: cdktf.listMapper(mqBrokerUserToTerraform)(this._user)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MqBroker.tfResourceType = "aws_mq_broker";
    return MqBroker;
}(cdktf.TerraformResource));
exports.MqBroker = MqBroker;
